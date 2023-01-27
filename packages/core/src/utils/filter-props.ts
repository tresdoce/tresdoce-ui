type FilterPropsFunction = (props: any) => any;

const filterProps: FilterPropsFunction = ({ theme, ...rest }) => rest;

export default filterProps;
