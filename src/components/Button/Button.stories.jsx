import Button from "../Button/Button";
// export defaultでmetadataを設定後その下にストーリーを記述
export default {
  title: "Common/Button",
  component: Button,
};
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: "Small",
  color: "primary",
  size: "sm",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...PrimarySmall.args,
  children: "Large",
  size: "lg",
};
