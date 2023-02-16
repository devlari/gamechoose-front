import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputProps } from ".";

import { Input } from ".";

export default {
  title: "Components/Form/Input",
  component: Input,
} as Meta;

export const Default = (args: InputProps) => {
  return <Input {...args} />;
};

Default.args = {
  label: "Nome",
};

export const Error = (args: InputProps) => {
  return <Input {...args} />;
};

Error.args = {
  label: "Senha",
  error: "Campo obrigatório",
};
