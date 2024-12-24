Title: User Instructions
Date: 2024-12-23
Tags: clj, cljs, html, css, quickBlog, intructions, manual
Blog-author: Mr.Bean
Image: assets/blog_wall.png
Image-Alt: A leather-bound notebook lies open on a writing desk

## QuickBlog - A small guide through the process

============================================

Hi, my name is Mr.Bean and I will go with you through the small tutorial steps. At the very begining, I will list the features that are currently available and thoroughly tested.


**Current working Features:**

Gobal Blog settings from the [API](https://github.com/borkdude/quickblog/blob/main/src/quickblog/api.clj) (bb.edn) of the [BorkDude/QuickBlog](https://github.com/borkdude/quickblog):

- Blog page Title /**Currently in use - navbar** /( :blog-title "Blog/index-page" )
- Blog author /**Currently in use - bottom of the index post page** /( :blog-author "Shtanglitza Mastermind Team" )
 
 <em>General usage is on the index page of posts where the signature says the author of the blog globally. This is something like **Admin author**. This works independently of any individual changes to posts and it is **only visible on the posts index page**. 
<!-- end-of-preview -->   
We can also add **"Blog-author: Jon Doe"** separately into the post while writing, which will lead to the result **that post has a sub-author** (separate post author).
In this way, each article can have a different author.</em>

- Blog description  /**Currently in use - navbar** /( :blog-description "A tech & domain blog powered by Shtanglitza" )
- Blog Root ( :blog-root "https://www.shtanglitza.ai/blog/"  ) 

<em> What is definitely not under the **PROS** when it comes to quickBlog is that it depends on the originally written quickblog and its configuration. Blog is produced using quickblog static site generator. Please clone quickblog repo to parent folder of this repository.


When the html code for the blog is compiled, the default URL address will be: [https://github.com/borkdude/quickblog](https://github.com/borkdude/quickblog) which is not nice to see, but if we specify root differently in bb.edn, after that the URL address will be: **https://www.shtanglitza.ai/blog/** </em>

- Fav-icon ( :favicon true )
- OG Blog Share Image /**NOT TESTED - due to the lack of tools that display the generated image locally** / (:blog-image "assets/blog_wall.png")
- Also max number of posts on the index page is 10 by default, we can go with more and less by adding the :key from API docs
<br />

**Features that do not need to be configured within bb.edn :**

- Truncated view of posts on the index page / **This feature is possible without any settings in the bb.edn file.** It is only necessary to add a comment line `<!-- end-of-preview -->` at the place where we want to break the post and build a preview version of it.

<em>Using images for posts is a classic Markdown approach, but external URL links from the Internet can also be used. Here I tried to make it easier and created classes related to different types of photo usage:</em>

- A classic responsive image that is loaded on a post must have a class <em> ".post-image" </em>

```html
<img class="post-image" src = "https://images.pexels.com/photos/3992930/pexels-photo-3992930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
```

- Avatar responsive rectangular image 1:1 that is loaded on a post must have a class <em> ".avatar-r-image" </em>
- Avatar responsive circle image 1:1 that is loaded on a post must have a class <em> ".avatar-c-image" </em>

*You should use those classes in the same way as post-image class - The classes are independent of each other, they can be used individually*

<br />
<img class="avatar-r-image" src = "https://gallerix.ie/gallery/4/5/9/2/36740-800.jpg">&nbsp &nbsp <img class="avatar-c-image" src = "https://gallerix.ie/gallery/4/5/9/2/36740-800.jpg">

*In case you use a video url, you can use the post-image class because it generally ensures the responsiveness of the element*

*One way with medium image thumbnail*
```html
[![Test Video](https://img.youtube.com/vi/EDZtODH1FCM/mqdefault.jpg)](https://www.youtube.com/watch?v=EDZtODH1FCM)
```

*A better way controlled with custom class*

```html
<a href="https://www.youtube.com/watch?v=EDZtODH1FCM" class="post-image" target="_blanc">
    <img src="https://img.youtube.com/vi/EDZtODH1FCM/maxresdefault.jpg" alt="Test Video" class="post-image" />
</a>
```


<a href="https://www.youtube.com/watch?v=EDZtODH1FCM" class="post-image" target="_blanc">
    <img src="https://img.youtube.com/vi/EDZtODH1FCM/maxresdefault.jpg" alt="Test Video" class="post-image" />
</a>

*I'm sure there are other ways too*

=========================================
<br />

# The Implementation Idea

The idea is that the main website links to the blog. Inside the navbar there will be a Blog link that will directly lead to the compiled html index file provided by Quickblog ***bb quickblog watch*** babashka terminal command.

How Babashka now !? What is Babashka ??? Where is Babashka from !!!? My panicked questions (until Adam explained it to me in 10 seconds) &#128514; &#128514;&#128514;

OK, get back to the track.

<img class="post-image-sm" src = "https://i.ibb.co/T21rsn4/Screenshot-2024-12-24-011549.png"> 


# How to operate - Easy!  

This title is a bit remind me of the Serbian TOP-SHOP advertisements. Kolač u tiganju - Nemoguće!"

Considering that the design is almost finished, I would say, finished, I will start with explanations about the actual creation and generation of posts. 
The only feature that would be an improvement is the introduction of a hamburger menu in case we have more links in the nav bar, so that it would be clearer on small devices. The style is written from scratch, since the original project did not take into account the architecture of the html code.

The structure of the website is already posted on GitHub, so we will simply place the main quickblog project (dependency - see bb.edn) on the root path, and in the public we would create dir /blog. So our blog URL will be:

`https://www.shtanglitza.ai/blog`


|    |    |
|---------------------|---------------------|
| <img class="post-image-sm" src = "assets/folder-structure.png">  | The "post" directory contains all <br /> the posts in markdown (.md) format. |

Once you are in the blog folder in the terminal, you can run the command to create a new article from there:

***Go to*** 
`public\blog` path

and from there:

***Crate a new post template***

```babashka 
bb quickblog new --file "user-instructions.md" --title "User Instructions"
```

***After that you can edit/write from the posts directory.The newly reated file will be there***

During editing/writing posts (.md), you need to run the following command to make the post visible on your blog. Check how the changes are happen on every save, it is useful to watch due to any errors or unexpected situations. For that we use the WATCH command:

```babashka
bb quickblog watch
```
**Important:** Some markdown codes didn't work when I tried. I'm a beginner, it's probably up to my experience.it must have something to do with markdown support.

 The Example of no-working code: `> [!IMPORTANT] This is an important alert message!`

 **Important:** Another important thing, don't mess with directories like /templates, /tags, everything inside blog/public except assets.(it's safe to add content there if needed)


 This custom blog exists thanks to [BorkDude/QuickBlog](https://github.com/borkdude/quickblog)






