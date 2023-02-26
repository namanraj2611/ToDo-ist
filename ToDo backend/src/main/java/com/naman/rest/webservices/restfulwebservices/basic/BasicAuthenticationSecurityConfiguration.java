package com.naman.rest.webservices.restfulwebservices.basic;
//package com.in28minutes.rest.webservices.restfulwebservices.basic;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//
////@Configuration
//public class BasicAuthenticationSecurityConfiguration {
////1
//	// Filter chain
//	// authenticate all requests
//	// basic authentication
//	// disabling csrf
//	// stateless rest api
//
//	// 2
//	// 1: Response to preflight request doesn't pass access control check
//	// 2: basic auth
//
//	@Bean
//	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//		return http
//				.authorizeHttpRequests(auth -> auth.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest()
//						.authenticated())
//				.httpBasic(Customizer.withDefaults()) // pop-up login
//				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // important
//																												// step
//																												// to
//																												// before
//																												// making
//																												// csrf
//																												// disablle,
//																												// we
//																												// have
//																												// to
//																												// make
//																												// the
//																												// sessionCreationPolicy
//																												// Stateless
//				.csrf().disable().build();
//
//	}
//
//}
