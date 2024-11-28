import React from "react";
import propTypes from "prop-types";

const defaultList = [];

function LabelView(props) {
    const {
        options = defaultList,
        values = defaultList,
        children,
        ...restProps
    } = props;

    return (
        <div {...restProps}>
            {children instanceof Function
                ? options.map((option, index) => 
                    children({
                        index,
                        value: option.value,
                        label: option.label,
                        isSelected: values.includes(option.value),
                    }),
                )
                : children}
        </div>
    );
}

LabelView.propTypes = {
    className: propTypes.string,
    options: propTypes.arrayOf(propTypes.shape({ label: propTypes.string, value: propTypes.string })),
    values: propTypes.arrayOf(propTypes.string),
    children: propTypes.oneOfType([propTypes.func, propTypes.node]),
};

export { LabelView };