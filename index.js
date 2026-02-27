import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import gsap from 'gsap';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({ className: 'rm-hero-block' });
    const titleRef = useRef();

    useEffect(() => {
        gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
    }, []);

    return (
        <div { ...blockProps }>
            <RichText
                tagName="h1"
                ref={titleRef}
                value={ attributes.title }
                onChange={ (title) => setAttributes({ title }) }
                className="text-5xl font-bold text-blue-600"
            />
            <RichText
                tagName="p"
                value={ attributes.description }
                onChange={ (description) => setAttributes({ description }) }
                className="mt-4 text-lg text-gray-700"
            />
        </div>
    );
}
