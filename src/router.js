import Vue from "vue"
import VueRouter from "vue-router"


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "InboxMessage",
        component: () => import ("../mails/inbox.vue"),

    },
    {
        path: "/mails/inbox",
        name: "InboxMessage",
        component: () => import ("../mails/inbox.vue")
    },
    {
        path: '/mails/inbox/mail',
        name: 'mapmail',
        component: () => import ("../mails/mail.vue")
      },

{
    path: "/mails/starred",
    name: "StarredMessage",
    component: () => import ("../mails/starred.vue")
},
{
    path: "/mails/snoozed",
    name: "SnoozedMessage",
    component: () => import ("../mails/snoozed.vue")
},
{
    path: "/mails/important",
    name: "ImportantMessage",
    component: () => import ("../mails/important.vue")
},



];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router;