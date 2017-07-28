import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PosBuilder } from '../chess/PosBuilder';

export const PosBuilderTest = (props, container: HTMLElement) => {
    ReactDOM.render(React.createElement(PosBuilder, props), container, () => {});
};