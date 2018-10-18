package com.jthelsinki.backend.api;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BookControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BookController bookController;

    @Test
    public void contextLoads() throws Exception {
        assertThat(bookController).isNotNull();
    }

    @Test
    public void loadDefaultBookRouteTest() throws Exception {
        this.mockMvc.perform(get("/books/")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("[{\"isbn\":\"195153448\",\"title\":\"Classical Mythology\",\"price\":2.99,\"author\":{\"id\":1,\"name\":\"Mark P. O. Morford\"}},{\"isbn\":\"200501812\",\"title\":\"Clara Callan\",\"price\":3.99,\"author\":{\"id\":2,\"name\":\"Richard Bruce Wright\"}},{\"isbn\":\"609731293\",\"title\":\"Decision in Normandy\",\"price\":4.99,\"author\":{\"id\":3,\"name\":\"Carlo D'Este\"}},{\"isbn\":\"374157065\",\"title\":\"Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It\",\"price\":5.99,\"author\":{\"id\":4,\"name\":\"Gina Bari Kolata\"}},{\"isbn\":\"393045218\",\"title\":\"The Mummies of Urumchi\",\"price\":6.99,\"author\":{\"id\":5,\"name\":\"E. J. W. Barber\"}},{\"isbn\":\"425176428\",\"title\":\"What If?: The World's Foremost Military Historians Imagine What Might Have Been\",\"price\":7.99,\"author\":{\"id\":6,\"name\":\"Robert Cowley\"}},{\"isbn\":\"671870432\",\"title\":\"Pleading Guilty\",\"price\":8.99,\"author\":{\"id\":7,\"name\":\"Scott Turow\"}},{\"isbn\":\"679425608\",\"title\":\"Under the Black Flag: The Romance and the Reality of Life Among the Pirates\",\"price\":9.99,\"author\":{\"id\":8,\"name\":\"David Cordingly\"}},{\"isbn\":\"771074670\",\"title\":\"Nights Below Station Street\",\"price\":10.99,\"author\":{\"id\":9,\"name\":\"David Adams Richards\"}},{\"isbn\":\"887841740\",\"title\":\"The Middle Stories\",\"price\":11.99,\"author\":{\"id\":10,\"name\":\"Sheila Heti\"}},{\"isbn\":\"1552041778\",\"title\":\"Jane Doe\",\"price\":12.99,\"author\":{\"id\":11,\"name\":\"R. J. Kaiser\"}},{\"isbn\":\"1567407781\",\"title\":\"The Witchfinder (Amos Walker Mystery Series)\",\"price\":13.99,\"author\":{\"id\":12,\"name\":\"Loren D. Estleman\"}},{\"isbn\":\"1575663937\",\"title\":\"More Cunning Than Man: A Social History of Rats and Man\",\"price\":14.99,\"author\":{\"id\":13,\"name\":\"Robert Hendrickson\"}},{\"isbn\":\"1881320189\",\"title\":\"Goodbye to the Buttermilk Sky\",\"price\":15.99,\"author\":{\"id\":14,\"name\":\"Julia Oliver\"}},{\"isbn\":\"440234743\",\"title\":\"The Testament\",\"price\":16.99,\"author\":{\"id\":15,\"name\":\"John Grisham\"}},{\"isbn\":\"452264464\",\"title\":\"Beloved (Plume Contemporary Fiction)\",\"price\":17.99,\"author\":{\"id\":16,\"name\":\"Toni Morrison\"}},{\"isbn\":\"1841721522\",\"title\":\"New Vegetarian: Bold and Beautiful Recipes for Every Occasion\",\"price\":18.99,\"author\":{\"id\":17,\"name\":\"Celia Brooks Brown\"}},{\"isbn\":\"689821166\",\"title\":\"Flood : Mississippi 1927\",\"price\":19.99,\"author\":{\"id\":18,\"name\":\"Kathleen Duey\"}},{\"isbn\":\"971880107\",\"title\":\"Wild Animus\",\"price\":20.99,\"author\":{\"id\":19,\"name\":\"Rich Shapero\"}},{\"isbn\":\"345402871\",\"title\":\"Airframe\",\"price\":21.99,\"author\":{\"id\":20,\"name\":\"Michael Crichton\"}},{\"isbn\":\"345417623\",\"title\":\"Timeline\",\"price\":22.99,\"author\":{\"id\":20,\"name\":\"Michael Crichton\"}},{\"isbn\":\"684823802\",\"title\":\"Out of the Silent Planet\",\"price\":23.99,\"author\":{\"id\":21,\"name\":\"C.S. Lewis\"}},{\"isbn\":\"375759778\",\"title\":\"Prague : A Novel\",\"price\":24.99,\"author\":{\"id\":22,\"name\":\"Arthur Phillips\"}},{\"isbn\":\"425163091\",\"title\":\"Chocolate Jesus\",\"price\":25.99,\"author\":{\"id\":23,\"name\":\"Stephan Jaramillo\"}},{\"isbn\":\"3404921038\",\"title\":\"Wie Barney es sieht.\",\"price\":26.99,\"author\":{\"id\":24,\"name\":\"Mordecai Richler\"}},{\"isbn\":\"3442353866\",\"title\":\"Der Fluch der Kaiserin. Ein Richter- Di- Roman.\",\"price\":27.99,\"author\":{\"id\":25,\"name\":\"Eleanor Cooney\"}},{\"isbn\":\"3442410665\",\"title\":\"Sturmzeit. Roman.\",\"price\":28.99,\"author\":{\"id\":26,\"name\":\"Charlotte Link\"}},{\"isbn\":\"3442446937\",\"title\":\"Tage der Unschuld.\",\"price\":29.99,\"author\":{\"id\":27,\"name\":\"Richard North Patterson\"}},{\"isbn\":\"375406328\",\"title\":\"Lying Awake\",\"price\":30.99,\"author\":{\"id\":28,\"name\":\"Mark Salzman\"}},{\"isbn\":\"446310786\",\"title\":\"To Kill a Mockingbird\",\"price\":31.99,\"author\":{\"id\":29,\"name\":\"Harper Lee\"}},{\"isbn\":\"449005615\",\"title\":\"Seabiscuit: An American Legend\",\"price\":32.99,\"author\":{\"id\":30,\"name\":\"Laura Hillenbrand\"}}]")));
    }

    @Test
    public void loadSearchBookRouteFakeCriteriaTest() throws Exception {
        this.mockMvc.perform(get("/books/search/Crichton")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("[]")));
    }


    @Test
    public void loadSearchBookRouteActualCriteriaTest() throws Exception {
        this.mockMvc.perform(get("/books/search/Lying Awake")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("[{\"isbn\":\"375406328\",\"title\":\"Lying Awake\",\"price\":30.99,\"author\":{\"id\":28,\"name\":\"Mark Salzman\"}}]")));
    }

    @Test
    public void loadSingleBookRouteTest() throws Exception {
        this.mockMvc.perform(get("/books/887841740")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("{\"isbn\":\"887841740\",\"title\":\"The Middle Stories\",\"price\":11.99,\"author\":{\"id\":10,\"name\":\"Sheila Heti\"}}")));
    }


}
