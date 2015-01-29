__author__ = 'mojtaba.banaie'
from Handlers.index_handler import IndexHandler
from Handlers.art_handler import arthandler,edithandler,deletehandler,showhandler

urlList  = [
    (r'/', IndexHandler),
    (r'/art$',arthandler),
     (r'/show$',showhandler),
    (r'/arthandler/edit/(\d+)$', edithandler),
    (r'/arthandler/delete/(\d+)$', deletehandler),


]