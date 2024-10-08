if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.querySelector("html").classList.add("mobile-browser");
}

const { fromEvent } = window.rxjs;
const { map, switchMap, takeUntil } = window.rxjs.operators;

const svg = document.querySelector("svg");
const message = document.querySelector("#message span");

// display initial condition

const initialViewBox = svg.getAttribute("viewBox");
message.textContent = initialViewBox;

// setup pan

const mousedown$ = fromEvent(svg, "mousedown");
const mousemove$ = fromEvent(svg, "mousemove");
const mouseup$ = fromEvent(window, "mouseup");

const mousedrag$ = mousedown$.pipe(
  switchMap((md) => {
    md.preventDefault();

    let prevX = md.clientX;
    let prevY = md.clientY;
    return mousemove$.pipe(
      map((mm) => {
        mm.preventDefault();

        const delta = {
          x: mm.clientX - prevX,
          y: mm.clientY - prevY,
        };
        prevX = mm.clientX;
        prevY = mm.clientY;

        return delta;
      }),
      takeUntil(mouseup$)
    );
  })
);

const updateViewBoxMin = (dx, dy) => {
  const viewBoxList = svg.getAttribute("viewBox").split(" ");
  viewBoxList[0] = "" + (parseInt(viewBoxList[0]) - dx);
  viewBoxList[1] = "" + (parseInt(viewBoxList[1]) - dy);
  const viewBox = viewBoxList.join(" ");
  svg.setAttribute("viewBox", viewBox);
  message.textContent = viewBox;
};

mousedrag$.subscribe(({ x, y }) => updateViewBoxMin(x, y));

const getEventPosition = (ev) => {
  let x, y;
  if (ev.offsetX) {
    /*
    Check the browser compatibility
    https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX
    */
    x = ev.offsetX;
    y = ev.offsetY;
  } else {
    const { left, top } = ev.srcElement.getBoundingClientRect();
    x = ev.clientX - left;
    y = ev.clientY - top;
  }
  return { x, y };
};

const scaleFactor = 1.01;

const zoomAtPoint = (point, svg, scale) => {
  // normalized position from 0 to 1
  const sx = point.x / svg.clientWidth;
  const sy = point.y / svg.clientHeight;

  // get current viewBox
  const [minX, minY, width, height] = svg
    .getAttribute("viewBox")
    .split(" ")
    .map((s) => parseFloat(s));

  const x = minX + width * sx;
  const y = minY + height * sy;

  const scaledWidth = width * scale;
  const scaledHeight = height * scale;
  const scaledMinX = x + scale * (minX - x);
  const scaledMinY = y + scale * (minY - y);

  const scaledViewBox = [scaledMinX, scaledMinY, scaledWidth, scaledHeight]
    .map((s) => s.toFixed(2))
    .join(" ");

  svg.setAttribute("viewBox", scaledViewBox);
  message.textContent = scaledViewBox;
};

svg.addEventListener("wheel", (ev) => {
  ev.preventDefault();
  const position = getEventPosition(ev);
  console.log(position);
  const scale = Math.pow(scaleFactor, ev.deltaY < 0 ? 1 : -1);
  zoomAtPoint(position, svg, scale);
});
