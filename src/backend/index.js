'use strict';

const Percolator=require('percolator').Percolator;
const port=8080;
const server=Percolator({'port': port});

server.route('/api/keywords',
    {
        GET: function (req, res) {
            res.object({'foo': 'bar'}).send()
        }
    }
);

server.listen(() =>{
    console.log(`Server started and listening on port ${port}`);
});