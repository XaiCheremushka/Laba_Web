import '../styles/Infocard.css';

interface InfocardProps
{
    img: string;
    title: string;
    description: string;
}

function Infocard({img, title, description} : InfocardProps)
{
    return(
        <div className="infocard-container">
            <img className='card-image' src={img}/>
            <h2 className='card-title'>{title}</h2>
            <p className='card-desc'>{description}</p>
        </div>
    );
}

export default Infocard;