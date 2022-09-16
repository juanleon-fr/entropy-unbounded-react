const Spbtn = ({ children, color, width, className }) => {
	switch (color) {
		case 'color-10':
			return (
				<button className={`btn btn-color-10 ${className}`}>
					{children}
					<div className='blackbar'></div>
				</button>
			);
		case 'color-30':
			if (width === '100') {
				return (
					<button className='btn btn-color-30 width100'>
						{children}
						<div className='blackbar'></div>
					</button>
				);
			} else {
				return (
					<button className='btn btn-color-30'>
						{children}
						<div className='blackbar'></div>
					</button>
				);
			}
		case 'color-60':
			return (
				<button className='btn btn-color-60'>
					{children}
					<div className='blackbar'></div>
				</button>
			);
		default:
			return (
				<button className='btn link'>
					{children}
					<div className='blackbar'></div>
				</button>
			);
	}
};
export default Spbtn;
