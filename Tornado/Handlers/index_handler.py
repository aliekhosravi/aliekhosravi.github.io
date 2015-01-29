import tornado
from models import artalboms
__author__ = 'mojtaba.banaie'


class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        post=artalboms.select()
        self.render('indexhome.html',UN= "Hello!",post=post)
        # else :
        #     session.set('LoggedIn', {"_id":"12222222","name":"ali"})
        #     self.render('index.html',UN="U Are Not Logged In..")
