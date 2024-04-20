import formMe from '../assets/images/form-me.png';
import others from '../assets/images/others.png';

interface Option {
    id: string;
    title: string;
    description: string;
    imageSource: any;
}

export const options: Option[] = [
    {
        id: '1',
        title: 'Para mi',
        description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
        imageSource: formMe,
    },
    {
        id: '2',
        title: 'Para alguien más',
        description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
        imageSource: others,
    },
];