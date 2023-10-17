-- 1. Por motivos presupuestarios, el departamento de recursos humanos necesita un informe que muestre los apellidos y el salario de los empleados que ganen más de 12.000 dólares.
    SELECT 	employees.last_name AS 'Apellido'
        		, employees.salary AS 'Salario'
    FROM employees 
    WHERE employees.salary >12000; 

-- 2. Cree un informe que muestre el apellido del empleado y el número de departamento del empleado número 176.
    SELECT	employees.last_name AS 'Apellido'
     		    , employees.department_id AS 'Departamento' 
    FROM employees 
   	WHERE employees.employee_id =176;

-- 3. El departamento de recursos humanos necesita buscar los empleados con salarios altos y bajos. Muestre el apellido y el salario de cualquier empleado cuyo salario no está en el rango de 5.000 a 12.000 dólares.
  -- opcion 1
    SELECT 	employees.last_name AS 'Apellido'
      		, employees.salary AS 'Salario' 
    FROM employees
    WHERE 	employees.salary <=12000    AND 	employees.salary >= 5000; 
  -- opcion 2
    SELECT 	employees.last_name AS 'Apellido'
      		, employees.salary AS 'Salario' 
    FROM employees
    WHERE  employees.salary BETWEEN 5000 AND 12000; 

-- 4. Cree un informe para mostrar el apellido, el identificador de puesto y la fecha de inicio para los empleados con los apellidos Matos y Taylor. Ordene la consulta por orden ascendente por fecha de inicio.
  -- opcion 1
    SELECT 	employees.last_name AS 'Apelllido'
    		, employees.job_id As 'Ident. Puesto'
            , employees.hire_date AS 'Fecha inicio'
    FROM employees
    WHERE employees.last_name IN ('Matos', 'Taylor');
  
  -- opcion 2
    SELECT 	employees.last_name AS 'Apelllido'
    		, employees.job_id As 'Ident. Puesto'
            , employees.hire_date AS 'Fecha inicio'
    FROM employees
    WHERE employees.last_name LIKE 'Matos' OR employees.last_name LIKE 'Taylor';
    
  -- opcion 3
    SELECT 	employees.last_name AS 'Apelllido'
    		, employees.job_id As 'Ident. Puesto'
            , employees.hire_date AS 'Fecha inicio'
    FROM employees
    WHERE employees.last_name = 'Matos' OR employees.last_name = 'Taylor';
    
-- 5. Muestre el apellido y el número de departamento de todos los empleados de los departamentos 20 y 50 en orden alfabético ascendente por nombre.
  -- opcion 1
      SELECT employees.last_name AS 'Apellido'
          , employees.department_id AS 'Departamento'
      FROM employees
      WHERE employees.department_id IN (20,50);
  -- opcion 2
      SELECT employees.last_name AS 'Apellido'
          , employees.department_id AS 'Departamento'
      FROM employees
      WHERE employees.department_id = 20 OR employees.department_id = 50 ;

-- 6. Encuentre el apellido y el salario de los empleados que ganan entre 5.000 y 12.000 dólares y están en el departamento 20 ó 50. Etiquete las columnas como Employee y Monthly Salary, respectivamente.
  -- opcion 1    
    SELECT 	employees.last_name AS 'Employee' 
    		    , employees.salary AS 'Monthly Salary'
    FROM employees
    WHERE employees.salary BETWEEN 5000 AND 12000 AND  employees.department_id IN (20,50);
  -- opcion 2
  SELECT 	employees.last_name AS 'Employee' 
    		  , employees.salary AS 'Monthly Salary'
  FROM employees
  WHERE employees.salary >= 5000 AND employees.salary <= 12000 AND  employees.department_id IN (20,50);
  
-- 7. El departamento de recursos humanos necesita un informe que muestre el apellido y la fecha de contratación de todos los empleados contratados en 1994.
    SELECT 	employees.last_name AS 'Apellido' 
    		, employees.hire_date AS 'Fecha contratacion'
    FROM employees
    WHERE YEAR (employees.hire_date) = 1994;     

-- 8. Cree un informe que muestre el apellido y el cargo de todos los empleados que no tengan supervisor
    SELECT 	employees.last_name AS 'Apellido'
    		, jobs.job_title AS 'Cargo'
    FROM 	employees 
    		, jobs
    WHERE   employees.manager_id IS NULL AND employees.job_id = jobs.job_id;  

-- 9. Cree un informe que muestre el apellido, el salario y la comisión de todos los empleados que ganen comisiones. Ordene los datos en orden descendente por salario y comisiones.

    SELECT 	employees.last_name AS 'apellido' 
    		, employees.salary
            , employees.commission_pct 
    FROM employees
    where employees.commission_pct IS NOT NULL ORDER by employees.salary DESC , employees.commission_pct DESC;



-- 10. Los miembros del departamento de recursos humanos desean tener más flexibilidad con las consultas que está creando. Quieren un informe que muestre el apellido y el salario de empleados que ganen más que una cantidad que el usuario especificará tras un prompt.
SET @salario_minimo = 5000.00;
SELECT 	employees.last_name AS 'Apellido'
		,employees.salary AS 'Salario'
        from employees
        where salary > @salario_minimo;
-- 11. El departamento de recursos humanos quiere ejecutar informes basados en un supervisor.
-- Cree una consulta que pida al usuario un identificador de supervisor y genere el identificador de empleado, el apellido, el salario y el departamento de los empleados de ese supervisor. El departamento de recursos humanos quiere poder ordenar el informe por una columna seleccionada.
-- Puede probar los datos con estos valores: manager ID = 103, ordenado por apellido de empleado
        
SET @MANAGER_ID = 103;
SET @ordenado_por = 'last_name';  
SELECT employees.employee_id
	, employees.last_name
    , employees.salary
    , employees.department_id 
    , employees.manager_id
FROM employees
WHERE employees.manager_id = @MANAGER_ID
ORDER BY
    CASE
        WHEN @ordenado_por = 'last_name' THEN employees.last_name
        WHEN @ordenado_por = 'salary' THEN employees.salary
        WHEN @ordenado_por = 'department_id' THEN employees.department_id
        ELSE employees.employee_id
    END;
-- 12. Muestre el apellido de todos los empleados cuya tercera letra sea la a.

SELECT employees.last_name 
FROM employees
where employees.last_name LIKE "__a%"; 
-- 13. Muestre el apellido de todos los empleados que tengan tanto una a como una e en su apellido.
SELECT employees.last_name 
	FROM employees
where employees.last_name LIKE "%a%" OR "%e%";  
-- 14. Muestre el apellido, el puesto de trabajo y el salario de todos los empleados que sean representante de ventas o administrativo y cuyo salario sea distinto de 2.500, 3.500 ó 7.000 dólares.
SELECT employees.last_name
	,employees.job_id
	, employees.salary
FROM employees
WHERE (employees.job_id  LIKE "SA_%" or employees.job_id like "AD_%") AND employees.salary NOT IN(2500, 3500, 7000);

-- 15. Mostrar el apellido, el salario y la comisión de todos los empleados cuyo importe de comisión sea del 20%.
select employees.last_name AS APELLIDO
	, employees.salary  AS SALARIO
    ,concat(employees.commission_pct * 100," %") as COMISION
FROM employees
WHERE employees.commission_pct = 0.20 ; 
