package routers

import (
	"modules/apis/users"

	"github.com/labstack/echo"
)

func Init(e *echo.Echo) {
	e.POST("/users", users.Add)
	e.PUT("/users/:id", users.Update)
	e.DELETE("/users/:id", users.Delete)
}
