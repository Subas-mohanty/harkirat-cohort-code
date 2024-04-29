## When we deploy the backend of our application we simply deploy it but when we deploy the frontend specifically react, we have to first create the dist folder or we have to build the app using this command
```
npm run build
```
## After building this , still we will not be able to access the page because this file is protected or doesn't have access

### To give access we have to install `serve` 

- Install `serve` globally
```
npm install -g serve
```
- Go to the dist folder and run this
```
serve
```

## Now we have the access to the page from every where.
## The only code that needs to go to production is the dist folder. We can delete other files as well still our app will run fine.

### -----------------------------------------------------------------------------


## Incase of backend, we let every user to hit the same backend but incase of frontend we don't do the same. Because :-

1. When making a backend request every user gets different data so we let them hit the same backend and get their respective data.

2. But when making a frontend call, for most of the users the data is same so if we let users to hit the same server then it might become slow so we use something called `CDNs`

### A CDN stands for `Content Delivery Network`. As the name suggests, it’s an optimal way for you to deliver content (mp4 files, jpgs and even HTML/CSS/JS files) to your users. It is better than serving it from a VM/EC2 instances because of a few reasons -

1. For frontends, mp4 files, images, Object stores  + CDNs are a better approach.

5. You can’t use the same for backends, since every request returns a different response. Caching doesn’t make any sense there. 