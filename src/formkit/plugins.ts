export const ariaInvalid = (inputNode: any) => {
  // @ts-ignore
  inputNode.on("created", ({ payload: node }) => {
    if (["box", "text"].includes(node.props.family) && typeof node.props.definition.schema === "function") {
      const definition = { ...node.props.definition };
      const schema = definition.schema;
      definition.schema = function (extensions = {}) {
        const ext = {
          ...extensions,
          ...{
            input: {
              attrs: {
                "aria-invalid": "$state.valid === false && $state.validationVisible || undefined",
              },
            },
          },
        };
        return schema(ext);
      };
      node.props.definition = definition;
    }
    return;
  });
};

export const fileRemoveLink = (inputNode: any) => {
  // @ts-ignore
  inputNode.on("created", ({ payload: node }) => {
    if (node.props?.type === "file" && typeof node.props.definition.schema === "function") {
      const definition = { ...node.props.definition };
      const schema = definition.schema;
      definition.schema = function (extensions = {}) {
        const ext = {
          ...extensions,
          ...{
            fileRemove: { $el: "a" },
          },
        };
        return schema(ext);
      };
      node.props.definition = definition;
    }
    return;
  });
};

export const helpSmall = (inputNode: any) => {
  // @ts-ignore
  inputNode.on("created", ({ payload: node }) => {
    if (typeof node.props.definition.schema === "function") {
      const definition = { ...node.props.definition };
      const schema = definition.schema;
      definition.schema = function (extensions = {}) {
        const ext = {
          ...extensions,
          ...{
            help: { $el: "small" },
          },
        };
        return schema(ext);
      };
      node.props.definition = definition;
    }
    return;
  });
};

export const removeBoxInnerWrapper = (inputNode: any) => {
  // @ts-ignore
  inputNode.on("created", ({ payload: node }) => {
    if (node.props.family === "box" && typeof node.props.definition.schema === "function") {
      const definition = { ...node.props.definition };
      const schema = definition.schema;
      definition.schema = function (extensions = {}) {
        const ext = {
          ...extensions,
          ...{
            inner: { $el: null },
          },
        };
        return schema(ext);
      };
      node.props.definition = definition;
    }
    return;
  });
};
