import { statusSelector } from "../../AboutPage.duck";

export const CardHeader = () => {}

const Card = ({
    name = 'ABC'
}) => {
    const status = useSelector(statusSelector);
}

Card.propTypes = {
    name: string
}

export default Card;