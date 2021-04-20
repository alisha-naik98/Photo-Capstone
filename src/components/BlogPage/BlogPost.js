import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "@reach/router";
import img1 from '../images/contact/3.jpg'
import img2 from '../images/contact/4.jpg'
import axios from 'axios';
import renderHtml from 'react-render-html';
import Comment from '../Comment'
//import Moment from 'react-moment';

class BlogPost extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            post: {},
            error: ''
            }
        }
        componentDidMount(){
            
            const wordPressSiteUrl = "http://151.106.108.53/";
            this.setState( {loading:true }, ()=>{
                axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/posts/${this.props.id}`)
                .then( res => {
                    console.warn(res.data);
                    this.setState( {loading:false, post: res.data})
                })
                .catch( error => this.setState( {loading: false, error: error.response.data}))
            });
        }

     handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
      }


    render(){
        const {post, loading} = this.state; 

        return(
            
            <div id="main">
                <Navbar></Navbar>  
                <div id="wrapper">
                <div class="content-holder elem scale-bg2 transition3" >
                    <div class="fixed-title"><span>Blog Post</span></div>
                     
                    <div class="content">
                        <section id="sec1">
                            <div class="container column-container">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div>
                                        { Object.keys( post ).length ?(      
                        <div id ="article">
                                <div key={post.id}>
                                    <div className="blog-text">
                                        <h3>{post.title.rendered}</h3>
                                        <p>
                                             <img src= {post.featured_media_src_url} alt={post.title.rendered} width="100%"></img>*
                                            {renderHtml(post.content.rendered)}
                                        </p> 
                                    </div>
                                </div>
                            
                        </div>
                            ) : ''}
                                        </div>
                                        <div class="post-author">
                                            <div class="author-img">
                                                <img alt='' src="images/blog/1.jpg"/>	
                                            </div>
                                            <div class="author-content">
                                                <h5><a href="#">Jane Kowalski</a></h5>
                                                <p>At one extremity the rope was unstranded, and the separate spread yarns were all braided and woven round the socket of the harpoon; the pole was then driven hard up into the socket; from the lower end the rope was traced half-way along the pole’s length, and firmly secured so, with intertwistings of twine.</p>
                                            </div>
                                        </div>
                                        <div class="content-nav blg-nav">
                                            <ul>
                                                <li><a href="blog-single.html"><i class="fa fa-long-arrow-left"></i></a></li>
                                                <li><span>/</span></li>
                                                <li><a href="blog-single.html"><i class="fa fa-long-arrow-right"></i></a></li>
                                            </ul>
                                            <div class="p-all">
                                                <a href="blog.html"><i class="fa fa-th-large"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4">
                                        <div class="sidebar">
                                            <Comment></Comment>
                                        {/* <div class="comments-holder">
                                            <h3>Comments <span>(3)</span></h3>
                                            <ul class="commentlist clearafix">
                                                <li class="comment">
                                                    <div class="comment-body">
                                                        <div class="comment-author">
                                                            <img alt='' src='images/blog/users/1.jpg' width="50" height="50"/>
                                                        </div>
                                                        <cite class="fn"><a href="#">Mery</a></cite>
                                                        <div class="comment-meta">
                                                            <h6><a href="#">January 02, 2014 at 07:39 am</a> / <a class='comment-reply-link' href="#">Reply</a></h6>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                                    </div>
                                                    <ul class="children">
                                                        <li class="comment">
                                                            
                                                            <div class="comment-body">
                                                                <div class="comment-author">
                                                                    <img alt='' src='images/blog/users/1.jpg' width="50" height="50"/>
                                                                </div>
                                                                <cite class="fn"><a href="#">Audrey</a></cite>
                                                                <div class="comment-meta">
                                                                    <h6><a href="#">January 18, 2014 at 13:29 am</a> / <a class='comment-reply-link' href="#">Reply</a></h6>
                                                                </div>
                                                                <p>Hi There,</p>
                                                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="comment">
                                                    
                                                    <div class="comment-body">
                                                        <div class="comment-author">
                                                            <img alt='' src='images/blog/users/1.jpg' width="50" height="50"/>
                                                        </div>
                                                        <cite class="fn"><a href="#">Lisa</a></cite>
                                                        <div class="comment-meta">
                                                            <h6><a href="#">January 22, 2014 at 03:19 am</a> / <a class='comment-reply-link' href="#">Reply</a></h6>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="comment-form-holder">
                                            <h3>Leave A Comment</h3>
                                            <div id="respond" class="clearafix">
                                                <div class="comment-reply-form">
                                                    <form action="#" method="post" id="commentform" class="form-horizontal" name="commentform">
                                                        <div class="comment-form-author control-group">
                                                            <div class="controls">
                                                                <input id="author" name="author" type="text" value="" size="40" aria-required="true" />
                                                            </div>
                                                            <label class="control-label" for="author">Name </label>
                                                        </div>
                                                        <div class="comment-form-email control-group">
                                                            <div class="controls">
                                                                <input id="email" name="email" type="text" value="" size="40" aria-required="true" />
                                                            </div>
                                                            <label class="control-label" for="email">Email </label>
                                                        </div>
                                                        <div class="comment-form-comment control-group">
                                                            <div class="controls">
                                                                <textarea id="comment" name="comment" cols="50" rows="8" aria-required="true" placeholder="Your comment here..">
                                                                </textarea>
                                                            </div>
                                                        </div>
                                                        <div class="form-submit">
                                                            <div class="controls">
                                                                <button class="transition button" type="submit">Post Comment</button>
                                                                <input type='hidden' name='comment_post_ID' value='30' id='comment_post_ID'/> 
                                                                <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            
                                        </div>
                                            */}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                       
                    <div class="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
                </div>
                
            </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default BlogPost;

