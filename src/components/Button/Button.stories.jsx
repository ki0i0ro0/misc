import Button from "../Button/Button";
// export defaultでmetadataを設定後その下にストーリーを記述
export default {
  title: "Common/Button",
  component: Button,
};

export const HelloButton = () => <Button>Hello World!</Button>;
export const Default = () => <Button>Default</Button>;
export const Danger = () => <Button color="danger">Danger</Button>;
export const Primary = () => <Button color="primary">Primary</Button>;
export const PrimarySmall = () => (
  <Button size="sm" color="primary">
    Small
  </Button>
);

export const PrimaryLarge = () => (
  <Button size="lg" color="primary">
    Large
  </Button>
);
