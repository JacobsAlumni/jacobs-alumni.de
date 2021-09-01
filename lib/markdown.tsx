import Link from "next/link";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownProps } from "react-markdown/lib/ast-to-react";
import rehypeRaw from 'rehype-raw'

interface MarkdownProps {
    allowDangerousHtml?: boolean;
    children: string;
}

export default class Markdown extends React.Component<MarkdownProps> {
    render() {
        const { children, allowDangerousHtml } = this.props;
        return <ReactMarkdown 
            rehypePlugins={allowDangerousHtml ? [rehypeRaw] : undefined}
            components={{"a": MarkdownLink}}
        >
            {children}
        </ReactMarkdown>
    }
}

class MarkdownLink extends React.Component<React.AnchorHTMLAttributes<HTMLAnchorElement> & ReactMarkdownProps> {
    render() {
        const {href, ...rest} = this.props;

        if (!href || !href.startsWith("/")) {
            return <a {...rest} href={href} rel="noreferrer noopener" />;
        }

        return <Link href={href}><a {...rest} /></Link>;
    }
}