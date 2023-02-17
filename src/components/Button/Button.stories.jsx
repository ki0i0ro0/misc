import Button from "./Button";

// export defaultでmetadataを設定後その下にストーリーを記述
export default {
  title: "Common/Button",
  component: Button,
};

export const HelloButton = () => <Button>Hello World!</Button>;
export const Primary = () => <Button color="primary">Primary</Button>;
export const Danger = () => <Button color="danger">Danger</Button>;
