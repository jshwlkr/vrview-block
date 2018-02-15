( function( blocks, components, i18n, element ) {
	const el = element.createElement;
	const __ = i18n.__;

	const blockStyle = {
		backgroundColor: '#900',
		color: '#fff',
		padding: '20px',
	};

	blocks.registerBlockType( 'vrvb/vrview', {
		title: __( 'VRView', 'vrvb' ),
		icon: 'format-image',
		category: 'common',
		attributes: {
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
		},
		edit: function( props ) {
			const attributes = props.attributes;

			const onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};

			return (
				el( 'div', { className: 'vrview-editor' },
					el( blocks.MediaUpload, {
						onSelect: onSelectImage,
						type: 'image',
						value: attributes.mediaID,
						render: function( obj ) {
							return el( components.Button, {
								className: attributes.mediaID ? 'image-button' : 'button button-large',
								onClick: obj.open,
							},
							! attributes.mediaID ? i18n.__( 'Upload Image' ) : el( 'img', { src: attributes.mediaURL } )
							);
						},
					} )
				)

			);
		},
		save: function( props ) {
			const attributes = props.attributes;

			return (
				el( 'div', { className: 'vrview-image', ID: 'vrview', 'data-src': attributes.mediaURL },
				)
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.components,
	window.wp.i18n,
	window.wp.element
) );
