from bottle import route, run, request

@route('/', method='GET')
def send(): 
	return 'Mensagem feita'


if __name__ == '__main__':
	run(host='0.0.0.0', port=8080, debug=True)
