//Import Images
import earthSummaryImg from '../../assets/planet-earth.svg';
import earthSurfaceImg from '../../assets/geology-earth.png';

export const ContentTabs = [
	{
		id: '-1',
		name: 'content',
		label: 'Overview',
		value: 'overview',
		valueimg: earthSummaryImg,
		defaultChecked: true,
	},
	{
		id: '-2',
		name: 'content',
		label: 'Structure',
		value: 'structure',
		defaultChecked: false,
	},
	{
		id: '-3',
		name: 'content',
		label: 'Surface',
		value: 'surface',
		valueimg: earthSurfaceImg,
		defaultChecked: false,
	},
];
