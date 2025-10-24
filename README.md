
==============================
# Shtanglitza website

## Homepage 

*TBd*

============

## Blog

Blog is produced using [BorkDude/QuickBlog](https://github.com/borkdude/quickblog) static site generator. Please clone quickblog repo to parent folder of this repository.


```../blog/bb.edn``` in the folder depends on it with relative path ` io.github.borkdude/quickblog {:local/root "../../quickblog"}`. 

### How our Blog works - Instructions for post authors ?

First of all you need to have ***Babashka installed***.

It is assumed to clone the git branch where the blog feature is located.

***git branch name:*** `feature/website-blog`

If you're working on a blog, you don't need to make any changes outside of the `./blog` folder (the main blog folder outside of the public), so specifically for that reason access the menined folder.
Once you are in the blog folder`shtaglitza.github.io/blog`, you can run the command to create a new article from there:

### Creating and working with posts

***Go to*** `shtaglitza.github.io/blog` path and from there use this commands:

***Crate a new post***

```babashka 
bb quickblog new --file "file-name.md" --title "post-title"
```
***After that you can edit/write from the posts directory.The newly created file will be there***

During editing/writing posts (.md), you need to run the following command to make the post visible on your blog. Check how the changes are happen on every save, it is useful to watch due to any errors or unexpected situations.

```babashka
bb quickblog watch
```
> **Important:** The results of the launched ***watch*** blog should be visible and tracked on `localhost:1888`

> **Important:** Don't mess with directories like /templates, /tags, everything inside `./blog` except ***assets (for post images) and posts (where your md files would be located)***.(it's safe to add content there if needed)

> **Important:** Changes to the blog do not require a rebuild of the main shtanglitza website project. The `watch` command simply generates new files in the `public/blog/` folder (another blog folder inside public) that are immediately available.

### Deleting posts and clearing the cache

In the `public/blog`, every time a new post is created and the watch command is called, the entire content from the blog folder is recompiled.

In order to successfully delete the post physically, you need to manually remove the post from the `blog/posts` directory. If you perform that durint watch it should delete that post immediately everywhere without leaving tails on the other places on the Blog.

Sometimes (rare case) it happens that you still see deleted post then you need to go to `shtaglitza.github.io/blog/` folder and run the commands:

Cleaning blog-public files
```babashka 
bb quickblog clean 
```
After that you should start watch again and Voila! 

==============

## Useful tips 

**Current Features:**

Gobal Blog settings from the [API](https://github.com/borkdude/quickblog/blob/main/src/quickblog/api.clj) (bb.edn) of the [BorkDude/QuickBlog](https://github.com/borkdude/quickblog):

- Blog page Title /**Currently in use - blog's navbar** /( :blog-title "Blog/index-page" )
- Blog author /**Currently in use - bottom of the index post page** /( :blog-author "Shtanglitza Mastermind Team" )
 
 <em>General usage is on the index page of posts where the signature says the author of the blog globally. This is something like **Admin author**. This works independently of any individual changes to posts and it is **only visible on the posts index page**. 

We can also add **"Blog-author: Jon Doe"** separately into the post while writing, which will lead to the result **that post has a sub-author** (separate post author).
In this way, each article can have a different author.
***See the post I will leave only for testing purposes*** `posts/user-instructions.md`
</em>

- Blog description  /**Currently in use - blog's navbar** /( :blog-description "A tech & domain blog powered by Shtanglitza" )
- Blog Root ( :blog-root "https://www.shtanglitza.ai/blog/"  ) 

<em> What is definitely not under the **PROS** when it comes to quickBlog is that it depends on the originally written quickblog and its configuration. Blog is produced using quickblog static site generator. Please clone quickblog repo to parent folder of this Shtanglitza repository.</em>


When the html code for the blog is compiled, the default URL address will be `https://github.com/borkdude/quickblog` which is not nice to see, but if we specify root differently in bb.edn, after that the URL address will be: `https://www.shtanglitza.ai/blog/` . This is already configured

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
Considering that we have articles with relative path defined in bb.edn (because previous example url is absolute)

```clojure
 :blog-root "https://www.shtanglitza.ai/blog/"
 ```
, we will write path to assets like this:
```html
<img class="post-image" src = "assets/<custom file or path>">
```


- Avatar responsive rectangular image 1:1 that is loaded on a post must have a class <em> ".avatar-r-image" </em>
- Avatar responsive circle image 1:1 that is loaded on a post must have a class <em> ".avatar-c-image" </em>

*You should use those classes in the same way as post-image class - The classes are independent of each other, they can be used individually*


*In case you use a video url, you can use the post-image class because it generally ensures the responsiveness of the element*

*One way with medium image thumbnail*
```html
[![Test Video](https://img.youtube.com/vi/EDZtODH1FCM/mqdefault.jpg)](https://www.youtube.com/watch?v=EDZtODH1FCM)
```

*A better way controlled with custom class*

```html
<a href="https://www.youtube.com/watch?v=EDZtODH1FCM"
   class="post-image"
   target="_blanc">
<img src="https://img.youtube.com/vi/EDZtODH1FCM/maxresdefault.jpg" 
     alt="Test Video" 
     class="post-image"/>
</a>
```
*I'm sure there are other ways too*

> **Important:** If you want to test the connection between the website and the blog in both directions (links), you have to start the main project from the folder with the command `npx shadow-cljs watch dev` from one terminal, at the same time from the other terminal the blog `bb qickblog watch`.
That is the way you can easily test the connection between locally. Before the actual release, I will change the default paths.

 ***This should cover all the important things related to writing our custom blog.***












