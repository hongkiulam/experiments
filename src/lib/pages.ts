interface Page {
  title: string;
  path: `${number}${number}${number}`;
  description: string;
}
const pages: Page[] = [
  {
    title: 'Spline Logo',
    path: '001',
    description:
      "Trying to learn how to use Spline from spline.design. I based this model on something from their community library and recreated my company's logo"
  },
  {
    title: "Spline Playdate",
    path: '002',
    description: "To further to skills in Spline and non-parametric modelling - I entered a Spline competition hosted by cabeza_patata and built this as the entry."
  }
];

export default pages;
