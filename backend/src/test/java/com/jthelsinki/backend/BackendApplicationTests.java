package com.jthelsinki.backend;

import com.jthelsinki.backend.api.BookControllerTest;
import com.jthelsinki.backend.repository.BookRepositoryTest;
import com.jthelsinki.backend.service.BookServiceTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;


/**
 * Test suite for running all tests. Orchestrates all the test classes into one place.
 *
 * All new test classes must be added to the SuiteClasses annotation below.
 */

@RunWith(Suite.class)
@Suite.SuiteClasses({
		BookControllerTest.class,
		BookRepositoryTest.class,
		BookServiceTest.class
})
public class BackendApplicationTests {
}
