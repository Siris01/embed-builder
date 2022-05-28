const Logo = () => {
	return (
		<svg width='48' height='48' viewBox='0 0 217 289' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_dd_0_1)'>
				<rect x='12' y='12' width='193' height='265' rx='10' fill='#36393F' />
				<mask
					id='mask0_0_1'
					style={{ maskType: 'alpha' }}
					maskUnits='userSpaceOnUse'
					x='12'
					y='12'
					width='193'
					height='265'
				>
					<rect x='12' y='12' width='193' height='265' rx='10' fill='#36393F' />
				</mask>
				<g mask='url(#mask0_0_1)'>
					<path d='M12 19C12 15.134 15.134 12 19 12V12V277V277C15.134 277 12 273.866 12 270V19Z' fill='#FF0000' />
				</g>
			</g>
			<rect x='31' y='25' width='60' height='8' rx='4' fill='black' fill-opacity='0.25' />
			<rect x='31' y='73' width='85' height='8' rx='4' fill='black' fill-opacity='0.25' />
			<rect x='31' y='49' width='70' height='8' rx='4' fill='black' fill-opacity='0.25' />
			<rect x='31' y='96' width='162' height='56' rx='4' fill='black' fill-opacity='0.25' />
			<rect x='31' y='167' width='162' height='100' rx='4' fill='black' fill-opacity='0.25' />
			<rect x='137' y='25' width='56' height='56' rx='28' fill='black' fill-opacity='0.25' />
			<defs>
				<filter
					id='filter0_dd_0_1'
					x='0'
					y='0'
					width='217'
					height='289'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dx='-4' dy='4' />
					<feGaussianBlur stdDeviation='4' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0' />
					<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dx='4' dy='-4' />
					<feGaussianBlur stdDeviation='4' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0' />
					<feBlend mode='normal' in2='effect1_dropShadow_0_1' result='effect2_dropShadow_0_1' />
					<feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_0_1' result='shape' />
				</filter>
			</defs>
		</svg>
	);
};

export default Logo;
