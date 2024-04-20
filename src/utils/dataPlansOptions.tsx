import ic_home from '../assets/images/ic-home.png';
import ic_clinica from '../assets/images/ic-clinica.png';


interface PlansOption {
    id: string;
    title: string;
    subTitle: string;
    price: string;
    description1: string;
    description2: string;
    description3: string;
    image?: any;
    isRecomended?: boolean;
}

export const dataPlansOptions: PlansOption[] = [
    {
        id: '1',
        title: 'Plan en Casa',
        subTitle: 'Costo del plan',
        price: '$39 al mes',
        description1: '● Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
        description2: '● Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
        description3: '● Indemnización de S/300 en caso de hospitalización por más de un día.',
        image: ic_home,
        isRecomended: false,
    },
    {
        id: '2',
        title: 'Plan en Casa y Clinica',
        subTitle: 'Costo del plan',
        price: '$99 al mes',
        description1: '● Consultas en clínica para cualquier especialidad.',
        description2: '● Medicinas y exámenes derivados cubiertos al 80%',
        description3: '● Atención médica en más de 200 clínicas del país.',
        image: ic_clinica,
        isRecomended: true,
    },
    {
        id: '3',
        title: 'Plan en Casa + Checkeo',
        subTitle: 'Costo del plan',
        price: '$49 al mes',
        description1: '● Un Chequeo preventivo general de manera presencial o virtual.',
        description2: '● Acceso a Vacunas en el Programa del MINSA en centros privados. ',
        description3: '● Incluye todos los beneficios del Plan en Casa. ',
        image: ic_home,
        isRecomended: false,
    },
];