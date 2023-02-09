import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

export const Default = () => <Header title="Login" />;

export const LoggedIn = () => <Header isLoggedIn title="Início" />;
