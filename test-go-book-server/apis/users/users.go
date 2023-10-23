package users

import (
	"modules/firebase"
	"net/http"
	"reflect"

	"github.com/labstack/echo"
)

type User struct {
	Name    string `json:"name"`
	Age     string `json:"age"`
	Address string `json:"address"`
}

// 追加
func Add(c echo.Context) error {
	u := new(User)
	if error := c.Bind(u); error != nil {
		return error
	}

	// データ追加呼び出し
	if error := firebase.Add("users", u.Name, StructToMap(u)); error != nil {
		return error
	}

	return c.JSON(http.StatusOK, u)
}

// 更新
func Update(c echo.Context) error {
	key := c.Param("id")
	u := new(User)
	u.Age = c.FormValue("Age")

	// データ追加呼び出し
	firebase.Update("users", key, StructToMap(u))

	return c.JSON(http.StatusOK, u)
}

// 削除
func Delete(c echo.Context) error {
	key := c.Param("id")
	firebase.Delete("users", key)
	return c.JSON(http.StatusOK, "")
}

func StructToMap(data interface{}) map[string]interface{} {
	result := make(map[string]interface{})
	elem := reflect.ValueOf(data).Elem()
	size := elem.NumField()

	for i := 0; i < size; i++ {
		field := elem.Type().Field(i).Name
		value := elem.Field(i).Interface()
		result[field] = value
	}

	return result
}
