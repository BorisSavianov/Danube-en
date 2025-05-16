import type { Feature } from '$lib/utils/types';

export default [
	{
		name: 'Threats to Biodiversity',
		description: `<ul>
        <li>Pollution (industrial, domestic, agricultural)</li>
        <li>Hydrotechnical structures (dams, dikes, canals)</li>
        <li>Invasive species – <a href="https://esenias.org/files/ESENIAS_Atlas_WEB.pdf" target="_blank">link</a></li>
        <li>Intensive agriculture and deforestation</li>
        <li>Climate change</li>
      </ul>`,
		image: 'images/features/threats.jpg',
		tags: [{ label: 'Biodiversity' }]
	},

	{
		name: 'Conservation Activities and Initiatives',
		description: `<ul>
        <li>National and transboundary conservation projects: ICPDR (International Commission for the Protection of the Danube River)</li>
        <li>"Danubeparks" project – a network of parks along the Danube</li>
        <li>Natura 2000 – EU network of protected areas</li>
        <li>Wetland restoration projects</li>
        <li>Fish migration and sturgeon conservation programs</li>
      </ul>`,
		image: 'images/features/conservation.jpg',
		tags: [{ label: 'Environmental Projects' }]
	},

	{
		name: 'Education and Public Participation',
		description: `<ul>
        <li>WWF’s “Living Danube” campaign</li>
        <li>Danube Day – June 29</li>
        <li>Awareness campaigns for local communities</li>
        <li>Educational programs in schools and universities</li>
        <li>Tourist routes highlighting the Danube’s natural wealth</li>
        <li>Environmental volunteer actions</li>
      </ul>`,
		image: 'images/features/education.jpg',
		tags: [{ label: 'Public Involvement' }]
	},

	{
		name: 'Success Stories',
		description: `<ul>
        <li>Partial recovery of sturgeon populations through artificial breeding</li>
        <li>Restored wetlands in Bulgaria, Romania, and Austria</li>
        <li>Reduced pollution through wastewater treatment plants</li>
      </ul>`,
		image: 'images/features/success.jpg',
		tags: [{ label: 'Good Practices' }]
	},
	{
		name: 'About Us',
		description: `We are students from the “Applied Programmer” class, united by our passion for technology and our responsibility toward nature. Through our environmental project, we aim to raise awareness about how we can all protect the Danube River together!`,
		image: 'images/features/about.jpg',
		tags: [{ label: 'Team' }]
	}
] as Feature[];
