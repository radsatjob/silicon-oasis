import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "API/llama-store-api",
    },
    {
      type: "category",
      label: "Llama",
      items: [
        {
          type: "doc",
          id: "API/get-llamas",
          label: "Get Llamas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/create-llama",
          label: "Create Llama",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "API/get-llama-by-id",
          label: "Get Llama",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/update-llama",
          label: "Update Llama",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "API/delete-llama",
          label: "Delete Llama",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "LlamaPicture",
      items: [
        {
          type: "doc",
          id: "API/get-llama-picture-by-llama-id",
          label: "Get Llama Picture",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/create-llama-picture",
          label: "Create Llama Picture",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "API/update-llama-picture",
          label: "Update Llama Picture",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "API/delete-llama-picture",
          label: "Delete Llama Picture",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "User",
      items: [
        {
          type: "doc",
          id: "API/get-user-by-email",
          label: "Get User By Email",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/register-user",
          label: "Register User",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Token",
      items: [
        {
          type: "doc",
          id: "API/create-api-token",
          label: "Create Api Token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
