import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import sanityClient from "../client"
import image from "../forest.jpg"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}


const About = props => {

    const [author,setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "author"]{
              name,
              "bio": bio[0].children[0].text,
              "authorImage": image.asset->url
          }`
          )
          .then((data) => setAuthor(data[0])).catch(console.error);
      }, []);

    console.log(author);

    if(author===null) {
        <div>Loading...</div>
    }

    return (
        <main className="relative">
            <img src={image} alt="forest" className="absolute w-full "/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:h-64 mr-8" alt={author.name}/>
                    <div className="text-lg flexflex-col justify-center" >
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there, I am {" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="hz9ayuz9" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

About.propTypes = {

}

export default About
