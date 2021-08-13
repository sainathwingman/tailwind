import TeamCalls from "./pages/TeamCalls";
import AppHeader from "./components/AppHeader";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App h-screen w-screen flex  flex-col">
      
      <AppHeader className="flex-shrink-0 border-b border-coolGray-200"/>      

      <div className="flex-grow flex flex-row min-h-0">        
      {/* min-h-0 is a needed hack , or else children of a flex grow item will overflow and not repect its overflow-scroll */}
        <SideBar className="flex-shrink-0 border-coolGray-200 border-r"/>
        <TeamCalls className="flex-grow flex-shrink-0 "/>
      </div>
      
    </div>
  );
}

export default App;
