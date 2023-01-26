#MVT패턴(MVC패턴이지만)
Model : Database랑 통신해주는역할 CRUD가능  Row,Columns,Item,Attributes
View : 장고에서 계산하는 부분, 유저가 서버에 요청 시 (Request), (Response)check if authenticated, check request valid, Collect data from DB, Render response등
Template(Controller):frontEnd랑 비슷. 
{{Article.title}}

manage에서 기능 설정가능


DB틀을 가공 
python manage.py makemigrations
python manage.py migrate

python manage.py createsuperuser

#serializers?
DB안에 내용을 가져와서 JSON혹은 Dictionary형태로 직렬화시켜줌