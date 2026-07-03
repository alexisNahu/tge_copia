import type { ImageMetadata } from 'astro';

import tv from '../assets/tv.png';
import tv2 from '../assets/tv_2.png';
import tv3 from '../assets/tv_3.png';
import heladera from '../assets/heladera.png';
import microondas from '../assets/microondas.png';
import hornoElectrico from '../assets/microondas2.png';
import partybox from '../assets/parlante.png';
import jblCharge from '../assets/jbl2.png';
import jblFlip from '../assets/jbl3.png';
import jblGo from '../assets/jbl4.png';
import lavarropas from '../assets/lavarropas.png';
import freidora from '../assets/air_frier.png';

export const categories = [
	'Televisores',
	'Heladeras',
	'Microondas',
	'Speakers',
	'Hornos',
	'Lavarropas',
	'Freidoras',
] as const;

export type Category = (typeof categories)[number];

export interface Product {
	id: number;
	name: string;
	category: Category;
	image: ImageMetadata;
	badge?: string;
	contado: string;
	financiado: { cuotas: number; monto: string }[];
}

export const products: Product[] = [
	{
		id: 1,
		name: 'TV 32 IFFALCON Smart GOOGLE TV',
		category: 'Televisores',
		image: tv,
		contado: '820.000',
		financiado: [
			{ cuotas: 3, monto: '355.333' },
			{ cuotas: 6, monto: '177.667' },
			{ cuotas: 12, monto: '95.667' },
		],
	},
	{
		id: 2,
		name: 'HELADERA TCL 300 LITROS',
		category: 'Heladeras',
		image: heladera,
		contado: '1.800.000',
		financiado: [
			{ cuotas: 3, monto: '720.000' },
			{ cuotas: 6, monto: '390.000' },
			{ cuotas: 12, monto: '210.000' },
			{ cuotas: 18, monto: '150.000' },
		],
	},
	{
		id: 3,
		name: 'MICROONDAS MIDAS 29L GRILL',
		category: 'Microondas',
		image: microondas,
		contado: '790.000',
		financiado: [
			{ cuotas: 3, monto: '316.000' },
			{ cuotas: 6, monto: '170.000' },
			{ cuotas: 12, monto: '92.000' },
		],
	},
	{
		id: 4,
		name: 'TV 50 SAMSUNG SMART CRYSTAL UHD',
		category: 'Televisores',
		image: tv2,
		contado: '2.440.000',
		financiado: [
			{ cuotas: 6, monto: '528.667' },
			{ cuotas: 12, monto: '284.000' },
			{ cuotas: 18, monto: '203.000' },
		],
	},
	{
		id: 5,
		name: 'TV 43 IFFALCON SMART GOOGLE TV',
		category: 'Televisores',
		image: tv3,
		contado: '1.330.000',
		financiado: [
			{ cuotas: 3, monto: '533.000' },
			{ cuotas: 6, monto: '288.817' },
			{ cuotas: 12, monto: '155.517' },
		],
	},
	{
		id: 6,
		name: 'PARTYBOX JBL 520',
		category: 'Speakers',
		image: partybox,
		contado: '4.200.000',
		financiado: [
			{ cuotas: 3, monto: '1.680.000' },
			{ cuotas: 6, monto: '910.000' },
			{ cuotas: 12, monto: '490.000' },
			{ cuotas: 18, monto: '350.000' },
		],
	},
	{
		id: 7,
		name: 'SPEAKER JBL CHARGE 6 BLUE',
		category: 'Speakers',
		image: jblCharge,
		contado: '990.000',
		financiado: [
			{ cuotas: 3, monto: '395.000' },
			{ cuotas: 6, monto: '215.000' },
			{ cuotas: 12, monto: '115.000' },
			{ cuotas: 18, monto: '82.000' },
		],
	},
	{
		id: 8,
		name: 'LAVARROPAS TOKYO 6KG',
		category: 'Lavarropas',
		image: lavarropas,
		contado: '1.980.000',
		financiado: [
			{ cuotas: 3, monto: '792.000' },
			{ cuotas: 6, monto: '429.000' },
			{ cuotas: 12, monto: '231.000' },
			{ cuotas: 18, monto: '165.000' },
		],
	},
	{
		id: 9,
		name: 'HORNO ELECTRICO TOKYO 66L',
		category: 'Hornos',
		image: hornoElectrico,
		contado: '1.000.000',
		financiado: [
			{ cuotas: 3, monto: '400.000' },
			{ cuotas: 6, monto: '216.500' },
			{ cuotas: 12, monto: '116.000' },
			{ cuotas: 18, monto: '83.000' },
		],
	},
	{
		id: 10,
		name: 'FREIDORA TOKYO 6.5L, 1600W',
		category: 'Freidoras',
		image: freidora,
		contado: '695.000',
		financiado: [
			{ cuotas: 3, monto: '278.000' },
			{ cuotas: 6, monto: '150.500' },
			{ cuotas: 12, monto: '82.000' },
		],
	},
	{
		id: 11,
		name: 'SPEAKER JBL FLIP 7 BLACK',
		category: 'Speakers',
		image: jblFlip,
		contado: '750.000',
		financiado: [
			{ cuotas: 3, monto: '308.000' },
			{ cuotas: 6, monto: '166.000' },
			{ cuotas: 12, monto: '89.000' },
			{ cuotas: 18, monto: '65.000' },
		],
	},
	{
		id: 12,
		name: 'SPEAKER JBL GRIP BLACK',
		category: 'Speakers',
		image: jblFlip,
		contado: '540.000',
		financiado: [
			{ cuotas: 3, monto: '220.000' },
			{ cuotas: 6, monto: '119.000' },
			{ cuotas: 12, monto: '70.000' },
		],
	},
	{
		id: 13,
		name: 'SPEAKER JBL GO BLUE',
		category: 'Speakers',
		image: jblGo,
		badge: '1 AÑO DE GARANTÍA',
		contado: '350.000',
		financiado: [
			{ cuotas: 3, monto: '140.000' },
			{ cuotas: 6, monto: '75.000' },
			{ cuotas: 12, monto: '42.000' },
		],
	},
];
