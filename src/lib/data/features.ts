import type { Feature } from '$lib/utils/types';

export default [
	{
		name: 'About Us',
		description: `We are students from the “Applied Programmer” class, united by our passion for technology and our responsibility toward nature. Through our environmental project, we aim to raise awareness about how we can all protect the Danube River together!`,
		image: 'images/features/class.jpg'
	},
	{
		name: 'Threats to Biodiversity',
		description: `<ul>
        <li>Pollution – industrial, domestic, and agricultural</li>
        <li>Hydrotechnical structures – dams, dikes, and canals</li>
        <li>Invasive species – <a href="https://esenias.org/files/ESENIAS_Atlas_WEB.pdf" target="_blank">ESENIAS Atlas</a></li>
        <li>Intensive agriculture and deforestation</li>
        <li>Climate change</li>
      </ul>`,
		image: 'images/features/hires6.png'
	},

	{
		name: 'Conservation Activities and Initiatives',
		description: `<ul>
        <li>National and transboundary environmental projects – e.g. ICPDR (International Commission for the Protection of the Danube River)</li>
        <li>DanubeParks Project – a network of parks along the Danube working together to protect nature</li>
        <li>Natura 2000 – an EU-wide network of protected areas, many of which are located in the Danube Valley</li>
        <li>Wetland restoration projects</li>
        <li>Fish migration programs and sturgeon conservation efforts</li>
      </ul>`,
		image: 'images/features/hires5.png'
	},

	{
		name: 'Education and Public Engagement',
		description: `<ul>
        <li>The Living Danube Partnership by WWF </li>
        <li>Danube Day – celebrated on June 29, featuring various public events</li>
        <li>Awareness campaigns for local communities</li>
        <li>Educational programs in schools and universities</li>
        <li>Tourist routes highlighting the natural richness of the Danube</li>
        <li>Participation in environmental volunteer initiatives</li>
      </ul>`,
		image: 'images/features/education.jpg'
	},

	{
		name: 'Positive Examples',
		description: `<ul>
        <li>Partial recovery of sturgeon populations through artificial breeding</li>
        <li>Restored wetlands in Bulgaria, Romania, and Austria</li>
        <li>Reduced pollution levels due to improved wastewater treatment plants</li>
      </ul>`,
		image: 'images/features/hires3.png'
	}
] as Feature[];
