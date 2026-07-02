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

const financiado = [
	{ cuotas: 3, monto: '720.000' },
	{ cuotas: 6, monto: '390.000' },
	{ cuotas: 12, monto: '210.000' },
	{ cuotas: 18, monto: '150.000' },
];

export const products: Product[] = [
	{ id: 1, name: 'TV 32 IFFALCON Smart GOOGLE TV', category: 'Televisores', image: tv, contado: '1.800.000', financiado },
	{ id: 2, name: 'HELADERA TCL 300 LITROS', category: 'Heladeras', image: heladera, contado: '1.800.000', financiado },
	{ id: 3, name: 'MICROONDAS MIDAS 29L GRILL', category: 'Microondas', image: microondas, contado: '890.000', financiado },
	{ id: 4, name: 'TV 50 SAMSUNG SMART CRYSTAL UHD', category: 'Televisores', image: tv2, contado: '3.200.000', financiado },
	{ id: 5, name: 'TV 43 IFFALCON SMART GOOGLE TV', category: 'Televisores', image: tv3, contado: '2.300.000', financiado },
	{ id: 6, name: 'PARTYBOX JBL 520', category: 'Speakers', image: partybox, contado: '2.100.000', financiado },
	{ id: 7, name: 'SPEAKER JBL CHARGE 6 BLUE', category: 'Speakers', image: jblCharge, contado: '1.150.000', financiado },
	{ id: 8, name: 'LAVARROPAS TOKYO 6KG', category: 'Lavarropas', image: lavarropas, contado: '2.450.000', financiado },
	{ id: 9, name: 'HORNO ELECTRICO TOKYO 66L', category: 'Hornos', image: hornoElectrico, contado: '980.000', financiado },
	{ id: 10, name: 'FREIDORA TOKYO 6.5L, 1600W', category: 'Freidoras', image: freidora, contado: '760.000', financiado },
	{ id: 11, name: 'SPEAKER JBL FLIP 7 BLACK', category: 'Speakers', image: jblFlip, contado: '890.000', financiado },
	{ id: 12, name: 'SPEAKER JBL GRIP BLACK', category: 'Speakers', image: jblFlip, contado: '650.000', financiado },
	{
		id: 13,
		name: 'SPEAKER JBL GO BLUE',
		category: 'Speakers',
		image: jblGo,
		badge: '1 AÑO DE GARANTÍA',
		contado: '420.000',
		financiado,
	},
];
