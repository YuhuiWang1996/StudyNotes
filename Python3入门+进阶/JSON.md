# JSON

- 是一种轻量级的数据**交换格式**
- 字符串是JSON的表现形式
- JSON字符串 : 符合JSON格式的字符串
- XML : 用的人越来越少了
- 跨语言交换数据
- JSON相较于XML
  - 易于阅读
  - 易于解析
  - 网络传输效率高

## 反序列化

- json.loads(json_str)
- object -> dict
- array -> list
- string -> str
- number -> int
- number -> float
- true -> True
- false -> False
- null -> None

```py
import json

json_str = '{"name": "gary", "age": 18}'
student = json.loads(json_str)      # dict
print(student['name'])              # gary

json_str = '[{"name": "gary", "age": 18}, {"name": "gary", "age": 18}]'
student = json.loads(json_str)      # list
print(student[0]['name'])           # gary
```

## 序列化

```py
import json

student = [
    {'name': 'gary', 'age': 18},
    {'name': 'sally', 'age': 20}
]
json_str = json.dumps(student)
print(json_str)                     # '[{"name": "gary", "age": 18}, {"name": "sally", "age": 20}]'
```

## 理解和误区

- REST 服务的标准格式
- JSON对象
- JSON
- JSON字符串
