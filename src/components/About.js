function About({about, image ="https://via.placeholder.com/215 (Links to an external site.)"})
{
    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{Object.values(about)}</p>
        </aside>
    )
}

export default About;
