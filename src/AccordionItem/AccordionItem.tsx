import { default as classnames } from 'classnames';
import * as React from 'react';
import { AccordionContext } from '../AccordionContext/AccordionContext';
import { UUID } from '../ItemContext/ItemContext';

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
    expandedClassName?: string;
    expanded: boolean;
};

class AccordionItem extends React.Component<AccordionItemProps> {
    render(): JSX.Element {
        const { className, expandedClassName, expanded, ...rest } = this.props;

        return (
            <div
                className={classnames(className, {
                    [String(expandedClassName)]: expanded && expandedClassName,
                })}
                {...rest}
            />
        );
    }
}

export default AccordionItem;
