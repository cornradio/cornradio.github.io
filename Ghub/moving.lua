function OnEvent(event, arg)
    --OutputLogMessage("Event: "..event.." Arg: "..arg.."\n")
    if MouseB then
    x,y = GetMousePosition()
    OutputLogMessage("mouse is at %d %d \n",x,y)
    MoveMouseTo( x+2, y+2 )

    end
end

EnablePrimaryMouseButtonEvents();

function OnEvent(event, arg)
    if IsKeyLockOn("Capslock") then
        repeat
            if IsMouseButtonPressed(1) then
                repeat
                    MouseMoveRelative(0,4)
                until not  IsMouseButtonPressed(1)
            end
        Sleep(25)
        until not IsKeyLockOn("Capslock")
    end
end
