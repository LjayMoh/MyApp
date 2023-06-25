import React from 'react'
import Img1 from '../../assets/DocumentaDone.png';
import Img2 from '../../assets/DocumentaX.jpg';
import '../../App.css';

export default function Essay() {
    return (
        <div className='prep'>
          <h1 className='subtitle1'>Preparatory Work</h1>
          <h2 className='sub'>My Internet Art</h2>
          <p>
            My main goal for the design of my internet art is to design a user interface like <em>Documenta Done</em> by Vuk Ćosić (1997). The net art used very bright colours to
            catch the user's attention, it uses white, red, and black which are colours I used in my website as well, they are what brings out the aesthetic 
            appeal of the website. The net art was designed as a copy or renewal of a net art project that was known as <em>Documenta X</em> by Catherine David in 1997, 
            Vuk designed <em>Documenta Done</em> (1997) by copying the code and forms from <em>Documenta X</em> (1997) then creating new advanced net art. 
            I found this interesting because it shows that art can be recreated for it to never lose its existence. What I like most about these 
            net artworks is that they show the algorithms of the internet and how people can use it to connect with each other, which is what I wish my internet art to be, 
            an interface that gives the user an opportunity to feel like they are part of the created world. 
          </p>
          <p>
            The artwork is a place where people are free to share their opinions through critical writing, sharing of information, and the showcasing of what 
            is going on around the world through broadcasts (Jones, 2017). It shows what the internet can do in terms of user participation when they interact 
            with the websites or the art on the internet, they can give feedbacks after engaging with what they see. I am planning to design an internet artwork 
            that will show the beauty of the internet and how art on the internet can be interactive, and to show this I am going to use text and images that will 
            allow the user to click on them and view them however they want, I will include icons as well which will allow the user to click on them and show an image. 
            I want the layout to look the same as <em>Documenta Done</em>, see figure 1 below which shows the interface of the net art.
          </p>
          <figure>
              <img src={Img1} className='pic'/>
              <figcaption className="caption">Figure 1. Vuk Ćosić, UI page of <em>Documenta Done</em>, 1997.</figcaption>
          </figure>
          <p>
            The interface of the <em>Documenta Done</em> (1997) as shown in the image above has a bright bold red colour that is used as the background to make it stand out, it has textboxes which tells the user more about the net art. 
            I would like my interface to be like this, but this will only show when the user clicks on the icons that will be on the main interface which will look like the old interface of <em>Documenta X</em> (1997), 
            when an icon is clicked it will display an image or textbox depending on which one the user clicks. Looking at figure 2, it shows how the original <em>Documenta X</em>’s interface looked like and 
            this is how I want the main interface of the internet art to look like before the user can interact with it. 
          </p>
          <figure>
              <img src={Img2} className='pic'/>
              <figcaption className="caption">Figure 2. Catherine David, UI page of <em>Documenta Done</em>, 1997.</figcaption>
          </figure>
          <p>
            The interface of the original net art as shown in figure 2 has links and icons that allow the user to navigate to other pages when they click on them. It is simple and easy to navigate, 
            not using many colours and they put white as the dominating colour. At the moment I am going to design the main interface of my internet art as the one of <em>Documenta X</em> because I feel
            like it is going to be simple and easy for the user to engage with, and they will be able to understand how it works and what message it is trying to give out at first glance. So I want to show the user
            that the internet is a exploartion space were artists can play with their thoughts and still express themselves but this time they use the computer algorithms.
          </p>

          <h3 className='sub'>Reference List:</h3>
          <p>Catherine David, <em>Documenta X</em> , 1997, Internet art. Kassel, Germany. 
            <a href="https://documenta10.de/english/frm_home.htm" className="u-url"> documenta10</a>
          </p>
          <p>Vuk Ćosić, <em>Documenta Done</em> , 1997, Internet art. Kassel, Germany. 
            <a href="https://sites.rhizome.org/anthology/documenta-done.html" className="u-url"> rhizome</a>
          </p>
          <p>JONES, C. 2017. The Copy and the Paste: documenta X's 1997 net art exhibition and Vuk Ćosić's 'Documenta Done'. <em>Rhizome</em>. 
            Online. URL:  <a href="https://rhizome.org/editorial/2017/mar/02/the-copy-and-the-paste/" className="u-url">rhizome.org</a>. (Accessed 20 May 2023)
          </p>
        </div>
    );
}