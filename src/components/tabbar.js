// @flow

import React from "react";
import Logo from "../../assets/images/Geometry.svg";

type ItemState = "inactive" | "active" | "disabled";

type Props = {
    itemState: ItemState,
};

type State = {
    isFocused: boolean,
    isHovered: boolean,
    isActive: boolean,
};

const activeBlue =
    "invert(27%) sepia(96%) saturate(4155%) hue-rotate(217deg) brightness(100%) contrast(90%)";
const disabledGrey =
    "invert(44%) sepia(7%) saturate(312%) hue-rotate(187deg) brightness(98%) contrast(89%)";
const white =
    "invert(100%) sepia(0%) saturate(7432%) hue-rotate(176deg) brightness(121%) contrast(114%)";

const OuterBoxStyle = {
    inactive: {
        hover: {
            background:
                "linear-gradient(0deg, rgba(24, 101, 242, 0.32), rgba(24, 101, 242, 0.32)), #FFFFFF",
            borderRadius: 3,
            border: "1px solid #1865F2",
        },
        active: {
            background: "#1B50B3",
        },
    },
};
export class TabbarItem extends React.Component<Props, State> {
    state: State = {
        isFocused: false,
        isHovered: false,
        isActive: false,
    };

    render() {
        const {itemState} = this.props;
        const {isHovered, isActive} = this.state;

        var outBoxStyle = null;
        if (isHovered) {
            outBoxStyle = OuterBoxStyle.inactive.hover;
        }
        if (isActive) {
            outBoxStyle = OuterBoxStyle.inactive.active;
        }

        var logoStyle = {
            filter: disabledGrey,
        };
        if (isHovered) {
            logoStyle = {
                filter: activeBlue,
            };
        }
        if (isActive) {
            logoStyle = {
                filter: white,
            };
        }

        return (
            <div
                style={{
                    display: "flex",
                    height: 38,
                    width: 44,
                    justifyContent: "center",
                    boxSizing: "border-box",
                    ...outBoxStyle,
                }}
            >
                <img
                    src={Logo}
                    alt="Logo"
                    style={logoStyle}
                    onMouseEnter={() => {
                        this.setState({isHovered: true});
                    }}
                    onMouseLeave={() => {
                        this.setState({isHovered: false});
                    }}
                    onMouseDown={() => {
                        this.setState({isActive: true});
                    }}
                    onMouseUp={() => {
                        this.setState({isActive: false});
                    }}
                />
            </div>
        );
    }
}
