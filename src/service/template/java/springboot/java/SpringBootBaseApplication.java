/*
 * @Author: Fantasy
 * @Date: 2020-01-13 09:10:50
 * @LastEditors: Fantasy
 * @LastEditTime: 2020-01-15 14:55:04
 * @Descripttion: 
 * @Email: 776474961@qq.com
 */
package $${basePackage};

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * spring boot运行入口
 * @author Fantasy
 *
 */
@SpringBootApplication
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class SpringBootBaseApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(SpringBootBaseApplication.class, args);
	}
	
	/**
	 * 打包后入口函数
	 */
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(SpringBootBaseApplication.class);
	}

}

