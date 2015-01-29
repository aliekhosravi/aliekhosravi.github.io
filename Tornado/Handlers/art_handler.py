__author__ = 'esy'

import tornado
import peewee
from models import artalboms

class arthandler(tornado.web.RequestHandler):
     def get(self):
         self.render('index.html')
     def post(self):
         img=self.get_argument("image")
         img1="../static/img/%s"%(img)
         caption=self.get_argument("title")
         nevesandeh=self.get_argument("anchor")

         des=artalboms.create(
             image=img1,
             title=caption,
             anchor=nevesandeh
         )
         self.redirect('/')
class showhandler(tornado.web.RequestHandler):
    def get(self):
        post=artalboms.select()
        self.render('show.html',post=post)

class edithandler(tornado.web.RequestHandler):
    def get(self,*args):
        catid=args[0]
        post=artalboms.select().where(artalboms.id==catid).get()
        self.render('editnegar.html',po=post)
    def post(self,*args):
        catid=args[0]
        catinfo=artalboms.select().where(artalboms.id==catid).get()
        catinfo.image=self.get_argument("img")
        catinfo.title=self.get_argument("tit")
        catinfo.anchor=self.get_argument("anc")

        catinfo.save()
        self.redirect('/')
class deletehandler(tornado.web.RequestHandler):
    def get(self,*args):
        catid=args[0]
        catinfo=artalboms.select().where(artalboms.id==catid).get().delete_instance()
        self.redirect('/')

