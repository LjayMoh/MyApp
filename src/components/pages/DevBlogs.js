import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

export default function DevBlogs() {
   return (
      <div className='blogs'>
        <h1 className='subtitle1'>Essay</h1>
        <p>
          We live in a time where everything is forever changing, and this change involves the growth of digital technology and 
          its impact on how information is accessed and shared. Our social interactions are influenced by the new innovations of technology, 
          and these interactions are somehow constructed by how we interact with the information we get and how this information shapes us. 
          Internet has been around for a long time, and it connects a lot of people from different spheres of life, including artists, 
          they have used the internet as a platform to share their artworks so people can engage, criticize, admire, and analyze them virtually. 
          It is now used to share information around the world so that everyone can access it. 
          <Link to='/essay' className='u-url'> MORE ...</Link>
        </p>

        <h2 className='subtitle1'>Weekly Blogs</h2>
        <p>
          The growth and innovations of new technologies have separated art into different categories, for example, 
          algorithmic art which is art created using computer programmes (Mazzone and Elgammal, 2019: 1), 
          and traditional art which is art created using traditional tools like paintings. 
          Computers generate art and they are doing a mind-blowing job, but the question is, can these computers 
          be classified as artists? This is a tricky question, and it can have both yes/no answers, 
          because human beings are the ones who create computers then they use these computers to create art. 
          Technological innovations have made artists use algorithmic tools to create art and with these tools, they also created AI (Artificial Intelligence). 
          <Link to='/bloggy' className='u-url'> MORE ...</Link>
        </p>

        <h3 className='subtitle1'> Preparatory Work</h3>
        <p>
          The artwork is a place where people are free to share their opinions through critical writing, sharing of information, and the showcasing of what 
          is going on around the world through broadcasts (Jones, 2017). It shows what the internet can do in terms of user participation when they interact 
          with the websites or the art on the internet, they can give feedbacks after engaging with what they see. I am planning to design an internet artwork 
          that will show the beauty of the internet and how art on the internet can be interactive, and to show this I am going to use text and images that will 
          allow the user to click on them and view them however they want, I will include icons as well which will allow the user to click on them and show an image. 
          I want the layout to look the same as <em>Documenta Done</em>, see figure 1 below which shows the interface of the net art.
          <Link to='/prepwork' className='u-url'> MORE ...</Link>
        </p>

        <h4 className='subtitle1'>Additional Work</h4>
        <p>
          When it comes to the intellectual sense of the AI, same as human beings having different intellectual abilities, AI is designed the same. The intelligence of the AI is measured by how it was created to functions,
          there are two classifications of AI, these are the weak AI and the strong AI. A weak AI is a type of AI that was designed to do limited actions that a human being can do like giving directions, or driving a car; this
          AI was designed to perform only one task distinctively which shows that it is created to have restrictions and is controlled when it comes to the level of human intelligence it should have. An example of this is one that
          almost all of us know which is a Google Search, we all know that when we want to search for something, we are likely to use Google which gives us all the information we want from differnet sources.
          <Link to='/addwork' className='u-url'>MORE ...</Link>
        </p>
      </div>
    );
}