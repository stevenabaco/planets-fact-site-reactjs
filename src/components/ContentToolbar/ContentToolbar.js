//Import Images
import earthSummaryImg from '../../assets/planet-earth.svg';
import earthStructureImg from '../../assets/planet-earth-internal.svg';
import earthSurfaceImg from '../../assets/geology-earth.png';

export const ContentTabs = [
	{
		id: 'A',
		name: 'content',
		label: 'Overview',
		value: 'overview',
		valueimg: earthSummaryImg,
		defaultChecked: true,
	},
	{
		id: 'B',
		name: 'content',
		label: 'Structure',
		value: 'structure',
		valueimg: earthStructureImg,
		defaultChecked: false,
	},
	{
		id: 'C',
		name: 'content',
		label: 'Surface',
		value: 'surface',
		valueimg: earthSurfaceImg,
		defaultChecked: false,
	},
];
